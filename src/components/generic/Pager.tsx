import { Flex, Spacer, ButtonGroup, Button } from "@chakra-ui/react";

export interface PagerProps {
    page: number;
    pages: number;
    loading: boolean;
    setPage: (page: number) => void;
}

export default function Pager({ page, pages, loading, setPage }: PagerProps) {


    const go = (page: number) => {
        if (page < 1) return
        if (page > pages) return
        setPage(page);
    }

    
    const indices = [];
    const pageSide = 5;
    const pageStart = page - pageSide;
    const pageEnd = page + pageSide;

    for (let i = pageStart; i <= pageEnd; i++) {
        indices.push(i);
    }

    if(indices[0] < 1) {
        while(indices[0] < 1) {
            indices.shift();
        }
    }

    if(indices[indices.length - 1] > pages) {
        while(indices[indices.length - 1] > pages) {
            indices.pop();
        }
    }

    let position = 0;
    for(let i = 0; i < indices.length; i++) {
        if(indices[i] == page) {
            position = i;
        }
    }
    while(position >2){
        indices.shift();
        position--;
    }
    while(indices.length > 5) {
        indices.pop();
    }

    if(page != 1) indices.unshift(1);
    indices.push(pages);




    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Spacer />
                <ButtonGroup>
                    <Button onClick={() => { go(page - 1) }} disabled={loading}>-</Button>
                    {indices.map((index, i) => {
                        return (
                            <Button key={i} onClick={() => { go(index) }} disabled={loading} isActive={index == page}>{index}</Button>
                        )
                    })}
                    <Button onClick={() => { go(page + 1) }} disabled={loading}>+</Button>
                </ButtonGroup>
            </Flex>
        </>
    )
}