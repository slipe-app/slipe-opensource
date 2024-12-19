import { Banner, Description, Publications, User } from "@/components/shared/profile/profile"

export default function Profile() {
  return (
    <div className='w-full h-full overflow-y-auto pb-[6.5rem] flex flex-col'>
        <Banner user={{banner: true}}/>
        <div className="w-full z-10 min-h-full flex flex-col gap-5">
          <User/>
          <Description/>
          <Publications/>
        </div>
    </div>
  )
}
