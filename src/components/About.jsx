

const aboutItems = [
    {
        label: 'Projects done',
        number: 5
    },
    {
        label: 'Years of experience',
        number: 3
    }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl
                md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8
                    md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Andrej and this is my page, which should give you some more insight into 
                        what I know and what I do. If it's not enough, feel free to check my GitHub by clicking <a href="https://github.com/bentley386">here</a> or see what I am
                        currentl thinking about by checking my blog (doesn't exist yet lol). ˁ˚ᴥ˚ˀ
                    </p>

                    <div className="flex flex-wrap items-center gap-4
                    md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold
                                        md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold
                                        md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img 
                        src="/images/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About