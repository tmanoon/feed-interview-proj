export function CommentFilter(props) {
        return (
            <section className="comment-filter flex justify-center">
                <input type="text" name="filter" value={props.filterBy.txt} placeholder="Filter" onChange={props.setFilterBy} />
            </section>
        )
    }