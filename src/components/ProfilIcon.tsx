import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
} from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
import { showLogout } from 'src/redux/slice/logout';

export default function ProfileIcon({
    picture = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    text,
    href,
    className = 'p-0',
}: any) {
    const { onLogout } = useAuth();
    const route = useRouter();
    const dispatch = useDispatch();
    const handleLogout = () => {
        onLogout('logout', (res: any) => {
            if (res.status === 200) {
                dispatch(showLogout());
                setTimeout(() => {
                    route.push('/Auth/login');
                    localStorage.clear();
                }, 2000);
            }
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
                    <Button
                        className={className}
                        size="lg"
                        variant="ghost"
                        disableRipple
                    >
                        <img src={picture} alt="profile" />
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
                            typeof="button"
                        >
                            Logout
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}
