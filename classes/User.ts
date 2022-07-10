
interface UserInterface {
    /**
     * First Name of User (e..g Sheel)
     */
    firstName: string;
    /**
     * Last Name of User (e..g Patel)
     */
    lastName: string;

    /**
     * Parses user into JSON-like object
     * @returns JSON-like object
     */
    parse() : object

    /**
     * Formats JSON-like object (with user data) into user
     * @param data JSON-like object
     * @returns User
     */
    format(data : object) : UserInterface

}


export class User implements UserInterface {
    firstName: string;
    lastName: string;

    parse(): object {
        throw new Error("Method not implemented.");
    }
    format(): UserInterface {
        throw new Error("Method not implemented.");
    }
}
