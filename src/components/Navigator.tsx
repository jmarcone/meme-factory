import React from "react";
import { Pagination } from "semantic-ui-react";


const Navigator = ({ activePage, setActivePage }) => {
    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage);

    return (
        <>
            <Pagination ellipsisItem={null} nextItem={null} prevItem={null}
                firstItem={null} lastItem={null} defaultActivePage={activePage} 
                totalPages={10} siblingRange={10} onPageChange={handlePaginationChange} 
                />

        </>
    );
}

export default Navigator;