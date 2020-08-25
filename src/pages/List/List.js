import React, { useEffect } from 'react'
import { actions } from '../../store/ducks/list.duck'
import styled from "styled-components";

import { connect } from 'react-redux';
import ListCard from '../../components/ListCard/ListCard'
function List({ data, getList, loading }) {

    useEffect(() => {
        getList();
    }, [getList])

    const CardWrapper = styled.div`
        display : flex;
        flex-wrap : nowrap;
        margin : 0 auto

    `
    const renderList = () => {

        if (data && data.length === 0) return <div> Empty </div>;


        return (
            <>
                {loading && <div>Loading</div>}

                {data && data.data
                    .map((item) => {
                        return (
                            <ListCard
                                key={item.id}
                                avatar={item.avatar}
                                first_name={item.first_name}
                                last_name={item.last_name}

                            />
                        );
                    })}
            </>
        );
    };
    return (
        <CardWrapper>
            {renderList()}

        </CardWrapper>
    )
}


const mapStateToProps = state => {
    return {
        data: state.list.data,
        loading: state.list.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getList: () => dispatch(actions.get_list()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

