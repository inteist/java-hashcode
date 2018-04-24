/**
 * Returns a hash code for a string - identical to Java's String.hashCode() method
 *
 * The hash code for a string object is computed as
 *     s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 * The hash value of the empty string is zero
 *
 * @param {string} s a string
 * @return {number} a hash code for the input string.
 *
 * Usage:
 * const hasher = require ('java-hashcode')
 * const hashCode = hasher.hasCode("inputString")
 */
exports.hashCode = function(s) {
  var h = 0,
    l = s.length,
    i = 0;
  if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0;
  return h;
};
