import React, { createElement, useEffect, useState } from 'react';
import { List, Space, Skeleton } from 'antd';
import { ClockCircleFilled } from '@ant-design/icons';
import { allArticles } from '../Api';
import moment from 'moment';

const IconText = ({ icon, text }) => (
    <Space>
        {createElement(icon)}
        {text}
    </Space>
);

const News = () => {
    const [state, setState] = useState({ data: [], isLoaded: false });

    useEffect(() => {
        const articles = async () => {
            const data = await allArticles();
            setState({ data: data.articles, isLoaded: true })
        }
        articles();
    }, []);

    const { data, isLoaded } = state;
    if (!isLoaded) return (
        Array(3).fill(' ').map(() => {
            return (
                <>
                <Skeleton active>
                    <List.Item.Meta
                        title={''}
                        description={''}
                    />
                    {' '}
                </Skeleton>
                <br /><br /><br />
                </>
            );
        })
    );
    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: () => {
                        const offset = document.getElementById('news').offsetTop;
                        setTimeout(() => window.scrollTo(0, offset), 500)
                    },
                    pageSize: 3,
                }}
                dataSource={data}
                renderItem={item => (
                    <>
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={ClockCircleFilled} text={moment.utc(item.publishedAt).format('MMMM D, YYYY, hh:mm A')} key="list-vertical-publish-at" />
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="banner"
                                    src={item.urlToImage}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.url} target='_blank' rel='noreferrer'>{item.title}</a>}
                                description={item.description?.replace(/<[^>]+>/g, '')}
                            />
                            <p className='news-content'>{item.content?.replace(/\[\+\s?\d+\s?chars\]/, '').replace(/<[^>]+>/g, '')} <a href={item.url} target='_blank' rel='noreferrer'>Read More</a></p>
                        </List.Item>
                        <br /><br /><br />
                    </>
                )}
            />
        </>

    )
}


export default News;