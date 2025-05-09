import bcrypt from 'bcryptjs'

export function hash(data: string) {
    return bcrypt.hashSync(data);
}