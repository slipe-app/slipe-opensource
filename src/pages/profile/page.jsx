import Banner from "@/components/shared/profile/banner";
import User from "@/components/shared/profile/user";

export default function Profile() {
  return (
    <div className='w-full h-full overflow-y-auto flex flex-col'>
        <Banner user={{banner: true}}/>
        <div className="w-full z-10 min-h-full flex flex-col gap-5 px-5">
          <User/>
        </div>
    </div>
  )
}
