const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
    this.tbls = this.setTbls()
    this.str = ''
    this.code = ''
  }

  encrypt(str, code) {
    if (!str || !code) throw new Error("Incorrect arguments!");

    this.str = str
    this.code = code

    let output = ''
    this.handleStr()
    for (let i = 0; i < this.str.length; i++) {
      try {
        output += this.tbls[this.alps.indexOf(this.str[i])][this.alps.indexOf(this.code[i])]
      } catch (error) {
        if (error.type = 'TypeError') output += this.str[i]
      }
    }
    return this.direct ? output : output.split('').reverse().join('')
  }

  decrypt(str, code) {
    if (!str || !code) throw new Error("Incorrect arguments!");
    this.str = str
    this.code = code

    let output = ''
    this.handleStr()

    for (let i = 0; i < this.str.length; i++) {
      try {
        const row = this.alps.indexOf(this.code[i])
        const col = this.tbls[row].indexOf(str[i])

        output += this.alps[col] || this.str[i]
      } catch (error) {
        if (error.type = 'TypeError') output += this.str[i]
      }
    }
    return this.direct ? output : output.split('').reverse().join('')
  }

  handleStr = () => {
    this.str = this.str.toUpperCase()
    const codeLength = this.code.length

    let mapStr = this.str.split(' ').map(el => el.length)
    let trimmedStrLth = this.str.replace(/\s/g, '').length
    let rep = Math.ceil(this.str.length / codeLength)
    let trimmedCode = this.code.repeat(rep).substr(0, trimmedStrLth).toUpperCase()
    let newCode = '';
    mapStr.reduce((acc, el) => {
      el += acc
      newCode += trimmedCode.slice(acc, el) + ' '
      return el
    }, 0)

    this.code = newCode
  }
  setTbls = () => {
    this.alps = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let tbls = []
    for (let i = 0; i < this.alps.length; i++) {
      tbls[i] = this.alps.slice(i).concat(this.alps.slice(0, i))
    }
    return tbls
  }
}

module.exports = {
  VigenereCipheringMachine
};
