import { useState } from "react";

import "./App.css";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const url = `https://api.apiflash.com/v1/urltoimage
?access_key=${ACCESS_KEY}
&url=https%3A%2F%2Fwww.greenmangaming.co...
&format=jpeg
&width=1920
&height=1080
&full_page=true`;

function App() {
    const [count, setCount] = useState(0);
    const [inputs, setInputs] = useState({
        url: "",
        format: "",
        width: "",
        height: "",
        full_page: false,
    });

    function resetInputs() {
        setInputs({
            url: "",
            format: "",
            width: "",
            height: "",
            full_page: false,
        });
    }
    async function handleFetch() {
        fetch(`https://api.apiflash.com/v1/urltoimage
?access_key=${ACCESS_KEY}
&url=${inputs.url}
&format=${inputs.format}
&width=${inputs.width}
&height=${inputs.height}
&full_page=${inputs.full_page}`);
    }
    function handleSubmit(e) {
        e.preventDefault();
        // if (!inputs.name) return;

        console.log(inputs);
        resetInputs();
    }

    function handleInputs(e) {
        const { name, value, type, checked } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    return (
        <>
            <div className="form-div">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">
                        Enter The url{" "}
                        <input
                            type="text"
                            name="url"
                            value={inputs.url}
                            onChange={handleInputs}
                        />
                    </label>

                    <div className="radio-div">
                        <p>Format</p>
                        <div className="radio-labels">
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="format"
                                    value="jpeg"
                                    checked={inputs.format === "jpeg"}
                                    onChange={handleInputs}
                                />
                                jpeg
                            </label>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="format"
                                    value="png"
                                    checked={inputs.format === "png"}
                                    onChange={handleInputs}
                                />
                                png
                            </label>
                            <label htmlFor="">
                                <input
                                    type="radio"
                                    name="format"
                                    value="webp"
                                    checked={inputs.format === "webp"}
                                    onChange={handleInputs}
                                />
                                webp
                            </label>
                        </div>
                    </div>

                    <label htmlFor="">
                        width{" "}
                        <input
                            type="number"
                            name="width"
                            value={inputs.width}
                            onChange={handleInputs}
                        />
                    </label>
                    <label htmlFor="">
                        height{" "}
                        <input
                            type="number"
                            name="height"
                            value={inputs.height}
                            onChange={handleInputs}
                        />
                    </label>
                    <label htmlFor="">
                        full_page{" "}
                        <input
                            type="checkbox"
                            name="full_page"
                            // value={inputs.full_page}
                            checked={inputs.full_page}
                            onChange={handleInputs}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default App;
