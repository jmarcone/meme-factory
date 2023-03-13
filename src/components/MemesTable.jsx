import React from "react";
import { Header, Image, Table } from 'semantic-ui-react'

const MemesTable = ({ memes, activePage, activeMeme, setActiveMeme }) => {
    const perPage = 10;
    const start = (activePage - 1) * perPage;
    const end = start + perPage - 1
    
    const handleClick = (idx) => {
        setActiveMeme(idx + start)
    }
    

    return (
        <Table className="memes-table" basic='very' celled collapsing size="large">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Meme</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {

                    memes.slice(start, end).map((meme, idx) =>
                        <Table.Row key={idx} onClick={(e) => handleClick(idx) } className={activeMeme === idx + start ? "active" : ""}>
                            <Table.Cell >
                                <Image src={meme.url} rounded fluid />
                            </Table.Cell>
                            <Table.Cell >
                                <Header as='h4' >
                                    <Header.Content>
                                        {meme.name}
                                        <Header.Subheader>{idx + start + 1} - {meme.id}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                        </Table.Row>
                    )
                }



            </Table.Body>
        </Table>
    );
}

export default MemesTable;