import bcrypt from 'bcryptjs';

export function hash(data: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data, salt);
}