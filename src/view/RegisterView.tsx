import FormRegister from 'src/fragments/auth/FormRegister';
import styled from 'src/styles/auth.module.css';

export default function RegisterView() {
    return (
        <>
            <div className={styled.auth}>
                <FormRegister />
            </div>
        </>
    );
}
