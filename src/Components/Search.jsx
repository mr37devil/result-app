const Search = () => {
    return (
        <div className="search-result">
            <div className="container">
            <h3>Enter your roll and registration to get result.</h3>
            <form action="#">
                <div className="class">
                    <label htmlFor="class">Class: </label>
                    <select name="class" id="class" required>
                        <option value="" disabled selected>-- Select your class --</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </select>
                </div>
                <div className="roll">
                    <label htmlFor="roll">Roll Number: </label>
                    <input type="number" id="roll" placeholder="Enter your roll here..." required />
                </div>
                <div className="reg">
                    <label htmlFor="reg">Registration Number: </label>
                    <input type="number" id="reg" placeholder="Enter your reg here..." required />
                </div>
                <div className="buttons">
                    <button>Get Result</button>
                </div>
            </form>
            </div>
      </div>
    );
}

export default Search; 