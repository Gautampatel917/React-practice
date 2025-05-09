function TodoItem1() {
    let todoName = "Buy milk";
    let todoDate = "4/10/2025"

    return <>
        <div className="container text-center">
            <div className="row mt-10px">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2 display:flex justify-content: space-between;">
                    <button type='button' className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </>
}

export default TodoItem1;