/**
 * Node.js FASTA Sequence Validation (Transformed from fasta_check.php)
 */

export interface FastaCheckResult {
  valid: boolean;
  checkStatus: number; // 0 = invalid, 1 = prot, 2 = nucl, >5 = pass
  errorFasta: number; // 0 = none, 1 = invalid format, 2 = sequence count > 10,000
  numberSeq: number;
  message: string;
}

export function testFasta(fastaText: string): FastaCheckResult {
  let checkPass = true;
  let protSeq = false;
  let nuclSeq = false;
  let checkStatus = 0;
  let numberSeq = 0;
  let errorFasta = 0;

  const sequences = fastaText.split('\n').map((s) => s.trim());

  if (sequences.length > 0) {
    const nucleotideRegex = /^[ATGCN]*$/i;
    const aminoacidRegex = /^[ILVFMCAGPTSYWQNHEDKRXUBZ]+[*]*$/i;

    const firstLine = sequences[0];

    if (firstLine.length > 0 && firstLine[0] === '>') {
      numberSeq += 1;
      const secondLine = sequences[1] || '';

      if (nucleotideRegex.test(secondLine)) {
        nuclSeq = true;
      } else if (aminoacidRegex.test(secondLine)) {
        protSeq = true;
      } else {
        checkPass = false;
      }

      if (checkPass) {
        let sequenceStatus = 1;

        for (let i = 1; i < sequences.length; i++) {
          const fastaLine = sequences[i];

          if (fastaLine.length === 0 && sequenceStatus === 0) {
            sequenceStatus = 0;
          } else if (fastaLine[0] === '>' && sequenceStatus !== 1) {
            sequenceStatus = 1;
            numberSeq += 1;
          } else if (nuclSeq && nucleotideRegex.test(fastaLine) && sequenceStatus > 0) {
            sequenceStatus = 2;
          } else if (protSeq && aminoacidRegex.test(fastaLine) && sequenceStatus > 0) {
            sequenceStatus = 2;
          } else if (fastaLine.length === 0 && sequenceStatus > 1) {
            sequenceStatus = 0;
          } else {
            checkPass = false;
            break;
          }
        }
      }
    } else {
      checkPass = false;
    }
  } else {
    checkPass = false;
  }

  if (nuclSeq) {
    checkStatus = 2;
  } else if (protSeq) {
    checkStatus = 1;
  }

  if (checkPass) {
    checkStatus += 5;
  } else {
    errorFasta = 1;
  }

  if (checkPass && numberSeq > 10000) {
    errorFasta = 2;
    checkPass = false;
  }

  return {
    valid: checkPass,
    checkStatus,
    errorFasta,
    numberSeq,
    message: checkPass ? 'proceed' : `fastaerror-${errorFasta}`,
  };
}
