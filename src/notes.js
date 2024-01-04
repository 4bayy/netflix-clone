

const Row = (props) => {
    return (
        <>
            <div>
                <h2 className="text-white text-left text-xl mb-4 mt-3">
                    {props.title}
                </h2>
            </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img
                            class="h-48 w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w400`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            class=" h-48 w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w400`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            class="h-48 w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w400`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            class="h-48 -w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w400`}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            class="h-48 w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w40`}
                            alt="dd"
                        />
                    </div>
                    <div>
                        <img
                            class="h-48 w-full rounded-lg"
                            src={`https://image.tmdb.org/t/p/w400`}
                            alt="dd"
                        />
                    </div>
                </div>
        </>
    );
};

export default Row;
