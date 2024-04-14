export default function FillCardContent({ txt }:any) {
    return (
        <div className="flex-end-2">
            <p className="text-black">
                <span>✔</span> {txt}
            </p>
        </div>
    );
}
