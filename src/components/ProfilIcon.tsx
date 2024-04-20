import style from '@/styles/navbar.module.css';
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from '@nextui-org/react';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';

export default function ProfileIcon({
    picture = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    text,
    href
}: any) {
    const { onLogout, isLoading } = useAuth();
    // const [profile, setProfile] = useState({});
    const route = useRouter();
    const handleLogout = () => {
        isLoading;
        onLogout('logout', () => {
            route.push('/auth/login');
            localStorage.clear();
            route.reload();
        });
    };

    return (
        <>
            <Dropdown
                showArrow
                radius="sm"
                classNames={{
                    base: 'bg-gray-900 rounded',
                    content:
                        'p-0 border-small border-divider bg-background dark:bg-default-900',
                    arrow: 'bg-background dark:bg-default-900',
                }}
            >
                <DropdownTrigger>
                    <Button variant="ghost" disableRipple>
                        <img
                            src={picture}
                            className={style['profile']}
                            alt=""
                        />
                    </Button>
                </DropdownTrigger>

                <DropdownMenu
                    aria-label="Custom item styles"
                    disabledKeys={['profile']}
                    className="p-3"
                    itemClasses={{
                        base: [
                            'rounded-md',
                            'text-default-500',
                            'transition-opacity',
                            'data-[hover=true]:text-foreground',
                            'data-[hover=true]:bg-default-100',
                            'dark:data-[hover=true]:bg-default-50',
                            'data-[selectable=true]:focus:bg-default-50',
                            'data-[pressed=true]:opacity-70',
                            'data-[focus-visible=true]:ring-default-500',
                        ],
                    }}
                >
                    <DropdownSection itemClasses={{ base: ['py-1'] }}>
                        <DropdownItem href={href}>{text}</DropdownItem>
                        <DropdownItem
                            key="logout"
                            className="text-danger"
                            color="danger"
                            onClick={handleLogout}
                        >
                            Logout
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}
