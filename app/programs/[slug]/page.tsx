import ProgramDetails from "@/components/programs/program-details";

const Page = async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;

    return (
        <ProgramDetails slug={slug}/>
    )
}
export default Page
