
import ThemeSwitch from "@/components/ThemeSwitch";
import SquadContainer from "@/components/SquadContainer";

export default function page() {
    return (
        <div className="flex min-h-screen flex-col items-center gap-12 p-24 container mx-auto">
            <div className='absolute top-0 w-full p-8 flex justify-end'>
                <ThemeSwitch/>
            </div>
            <SquadContainer/>
        </div>
    );
}
export const dynamic = 'force-dynamic'
