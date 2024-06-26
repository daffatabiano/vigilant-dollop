import styled from '@/styles/destinationStyles/activity.module.css';

export default function FilterByCategoriesId({
    select,
    id,
    defaultValue,
    onClick,
}: {
    select: any;
    id: string;
    defaultValue?: string;
    onClick?: () => void;
}) {
    return (
        <div className={styled.filter}>
            <select id={id} defaultValue={defaultValue || 'DEFAULT'}>
                <option value="DEFAULT" disabled>
                    {' '}
                    All Categories
                </option>
                {select.map((item: any) => (
                    <option
                        value={item.id}
                        key={item.id}
                        selected={item.id === defaultValue}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
            <button type="button" onClick={onClick}>
                <i className="bi bi-funnel-fill"></i> Filter
            </button>
        </div>
    );
}
