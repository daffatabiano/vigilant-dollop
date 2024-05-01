type Props = {
    id: string;
};

export default function SelectRole(props: Props) {
    const { id } = props;
    return (
        <>
            <label className="form-label" htmlFor="role">
                Role
            </label>
            <select className="form-select text-black" name="role" id={id}>
                <option className="text-black" value="admin">
                    admin
                </option>
                <option className="text-black" value="user">
                    user
                </option>
            </select>
        </>
    );
}
