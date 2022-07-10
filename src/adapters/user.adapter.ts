import { User, UserEndpoint } from "../models"

export const createAdaptedUser = (user: UserEndpoint) => {
    const formattedUser: User = {
        name: user.name,
        lastName: user.last_name,
        status: user.status
    }
}