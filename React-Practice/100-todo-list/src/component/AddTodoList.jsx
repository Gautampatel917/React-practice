function AddTodoList() {
    return (
        <div className="row">
            <div className="col-6">
                <input type="text" placeholder='Enter your todo here...' />
            </div>
            <div className="col-4">
                <input type="date" name="date" id="date" />
            </div>
            <div className="col-2 display:flex justify-content: space-between;">
                <button type='button' className="btn btn-success">Add</button>
            </div>
        </div>
    )
}

export default AddTodoList;