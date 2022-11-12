export interface PutAspnetuserDTO {
    id: string
    userName?: string
    normalizedUserName?: string
    email?: string
    normalizedEmail?: string
    emailConfirmed: number
    passwordHash?: string
    securityStamp?: string
    concurrencyStamp?: string
    phoneNumber?: string
    phoneNumberConfirmed: number
    twoFactorEnabled: number
    lockoutEnd: Date
    lockoutEnabled: number
    accessFailedCount: number
    perfil?: string
}