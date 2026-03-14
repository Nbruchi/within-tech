const WhoItsFor = ({program}:{program:Program}) => {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">WHO IT&apos;S FOR</h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{program.whoForText}</p>
                    </div>

                    <div className="bg-gray-100 rounded-2xl p-8 md:p-10 shadow-inner">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">AGES</h3>
                                <p className="text-lg">{program.ages}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">LEVELS</h3>
                                <p className="text-lg">{program.levels}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">FORMAT</h3>
                                <p className="text-lg">{program.format}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">LOCATION</h3>
                                <p className="text-lg">{program.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhoItsFor
