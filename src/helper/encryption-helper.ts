import * as crypto from 'crypto'
import * as config from 'config'

const encryptionConfig = config.get('encryption')

export const encrypt = text => {
    const cipher = crypto.createCipher('aes-256-cbc', encryptionConfig.secret)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}
export const decrypt = text => {
    const decipher = crypto.createDecipher('aes-256-cbc', encryptionConfig.secret)
    let dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}


