export const CODING_DNA = 'GCCACCATGGCTTTTGAACCGTAAGACCTG';
export const TEMPLATE_DNA = 'CGGTGGTACCGAAAACTTGGCATTCTGGAC';
export const RNA = 'GCCACCAUGGCUUUUGAACCGUAAGACCUG';

const BASES_IN_NCBI_ORDER = 'UCAG';
const AMINO_ACID_ROWS = [
  ['Ala', '丙氨酸'],
  ['Arg', '精氨酸'],
  ['Asn', '天冬酰胺'],
  ['Asp', '天冬氨酸'],
  ['Cys', '半胱氨酸'],
  ['Gln', '谷氨酰胺'],
  ['Glu', '谷氨酸'],
  ['Gly', '甘氨酸'],
  ['His', '组氨酸'],
  ['Ile', '异亮氨酸'],
  ['Leu', '亮氨酸'],
  ['Lys', '赖氨酸'],
  ['Met', '甲硫氨酸'],
  ['Phe', '苯丙氨酸'],
  ['Pro', '脯氨酸'],
  ['Ser', '丝氨酸'],
  ['Thr', '苏氨酸'],
  ['Trp', '色氨酸'],
  ['Tyr', '酪氨酸'],
  ['Val', '缬氨酸'],
];

const aminoAcidByShort = Object.fromEntries(
  AMINO_ACID_ROWS.map(([short, name]) => [short, Object.freeze({ short, name })]),
);

// NCBI standard table, with first, second, and third bases iterated in UCAG order.
const GENETIC_CODE_ROWS = [
  'Phe', 'Phe', 'Leu', 'Leu', 'Ser', 'Ser', 'Ser', 'Ser', 'Tyr', 'Tyr', null, null,
  'Cys', 'Cys', null, 'Trp',
  'Leu', 'Leu', 'Leu', 'Leu', 'Pro', 'Pro', 'Pro', 'Pro', 'His', 'His', 'Gln', 'Gln',
  'Arg', 'Arg', 'Arg', 'Arg',
  'Ile', 'Ile', 'Ile', 'Met', 'Thr', 'Thr', 'Thr', 'Thr', 'Asn', 'Asn', 'Lys', 'Lys',
  'Ser', 'Ser', 'Arg', 'Arg',
  'Val', 'Val', 'Val', 'Val', 'Ala', 'Ala', 'Ala', 'Ala', 'Asp', 'Asp', 'Glu', 'Glu',
  'Gly', 'Gly', 'Gly', 'Gly',
];

const codonOrder = [];
for (const first of BASES_IN_NCBI_ORDER) {
  for (const second of BASES_IN_NCBI_ORDER) {
    for (const third of BASES_IN_NCBI_ORDER) {
      codonOrder.push(`${first}${second}${third}`);
    }
  }
}

export const GENETIC_CODE = Object.freeze(Object.fromEntries(
  codonOrder.map((codon, index) => [
    codon,
    GENETIC_CODE_ROWS[index] === null ? null : aminoAcidByShort[GENETIC_CODE_ROWS[index]],
  ]),
));

const CODING_START = 6;
const STOP_START = 21;
const CODON_COUNT = 6;
const COMPLEMENT_DNA_BASE = Object.freeze({ A: 'T', T: 'A', G: 'C', C: 'G' });
const COMPLEMENT_RNA_BASE = Object.freeze({ A: 'U', U: 'A', G: 'C', C: 'G' });
const TEMPLATE_TO_RNA_BASE = Object.freeze({ A: 'U', T: 'A', G: 'C', C: 'G' });

export const CODONS = Object.freeze(Array.from({ length: CODON_COUNT }, (_, index) => {
  const start = CODING_START + index * 3;
  const end = start + 3;
  const rna = RNA.slice(start, end);
  const aminoAcid = GENETIC_CODE[rna];
  const anticodonAligned = aminoAcid === null
    ? null
    : [...rna].map((base) => COMPLEMENT_RNA_BASE[base]).join('');

  return Object.freeze({
    index,
    start,
    end,
    rna,
    aminoAcid,
    stop: aminoAcid === null,
    anticodonAligned,
    anticodon5to3: anticodonAligned === null ? null : [...anticodonAligned].reverse().join(''),
  });
}));

export const AMINO_ACIDS = Object.freeze(CODONS
  .filter((codon) => !codon.stop)
  .map((codon, index) => Object.freeze({
    index,
    short: codon.aminoAcid.short,
    name: codon.aminoAcid.name,
    codonIndex: codon.index,
    start: codon.start,
    end: codon.end,
  })));

// Muted, shared scene colors; T and U remain distinct so DNA and RNA are legible together.
export const BASE_COLORS = Object.freeze({
  A: '#c5b775',
  T: '#9caec6',
  G: '#90a998',
  C: '#c79e92',
  U: '#b6a1be',
});

function validateSequence(sequence, alphabet, label) {
  if (typeof sequence !== 'string' || sequence.length === 0) {
    throw new TypeError(`${label} must be a non-empty string`);
  }
  if ([...sequence].some((base) => !alphabet.includes(base))) {
    throw new RangeError(`${label} contains a base outside ${alphabet}`);
  }
}

function validateIndex(index, maxExclusive, label = 'index') {
  if (!Number.isInteger(index) || index < 0 || index >= maxExclusive) {
    throw new RangeError(`${label} must be an integer from 0 to ${maxExclusive - 1}`);
  }
}

export function complementDNA(sequence) {
  validateSequence(sequence, 'ATGC', 'DNA sequence');
  return [...sequence].map((base) => COMPLEMENT_DNA_BASE[base]).join('');
}

export function transcribe(sequence) {
  validateSequence(sequence, 'ATGC', 'DNA sequence');
  return [...sequence].map((base) => TEMPLATE_TO_RNA_BASE[base]).join('');
}

/** Translate the first AUG reading frame and stop before its first stop codon. */
export function translate(sequence = RNA) {
  validateSequence(sequence, 'AUGC', 'RNA sequence');
  const start = sequence.indexOf('AUG');
  if (start < 0) throw new RangeError('RNA sequence does not contain a start codon (AUG)');

  const peptide = [];
  for (let position = start; position < sequence.length; position += 3) {
    if (position + 3 > sequence.length) {
      throw new RangeError('RNA sequence ends with an incomplete codon');
    }
    const aminoAcid = GENETIC_CODE[sequence.slice(position, position + 3)];
    if (aminoAcid === null) break;
    peptide.push(aminoAcid);
  }
  return peptide;
}

export function regionAt(index) {
  validateIndex(index, RNA.length);
  if (index < CODING_START) return 'utr5';
  if (index < STOP_START) return 'coding';
  if (index < STOP_START + 3) return 'stop';
  return 'utr3';
}

export function indicesForCodon(index) {
  validateIndex(index, CODON_COUNT, 'codon index');
  const start = CODING_START + index * 3;
  return [start, start + 1, start + 2];
}

export function tracePosition(index) {
  const region = regionAt(index);
  if (region === 'utr5' || region === 'utr3') {
    return { indices: [index], codonIndex: null, aminoAcid: null, region };
  }

  const codonIndex = Math.floor((index - CODING_START) / 3);
  return {
    indices: indicesForCodon(codonIndex),
    codonIndex,
    aminoAcid: CODONS[codonIndex].aminoAcid,
    region,
  };
}
