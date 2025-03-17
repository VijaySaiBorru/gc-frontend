import React from 'react'
import { useSelector } from 'react-redux'
import AdminStats from './AdminStats';
import AdminStatsChart from './AdminStatsChart';
import { useGetAdminStatsQuery } from '../../../../redux/features/stats/statsApi';

const AdminDMain = () => {
    const {seller} = useSelector((state) => state.sellerauth.seller);
    const {data: stats, error, isLoading} = useGetAdminStatsQuery(seller?._id);
    if(isLoading) return <div>Loading...</div>
    if(!stats) return <div>No stats found</div>
    if(error) return <div>Failed to load stats!</div>
    //console.log(seller);
  return (
    <div className='p-6'>
        <div>
            <h1 className='text-2xl font-semibold mb-4'>Seller Dashboard</h1>
            <p className='text-gray-500'>Hi, {seller?.username}! Welcome to the Seller dashboard.</p>
            
            <AdminStats stats={stats}/>
            <AdminStatsChart stats={stats}/>
        </div>
    </div>
  )
}

export default AdminDMain