import ProgramDetails from "@/components/programs/program-details";

const SingleProgramPage = async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;

    return (
        <ProgramDetails slug={slug}/>
    )
}
export default SingleProgramPage
