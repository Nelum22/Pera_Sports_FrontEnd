import React, { useState } from 'react'
import AdminPlayerCard from './AdminPlayerCard'
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import DebouncedInput from '../icons/DebouncedInput';
import { USERS } from '../icons/Data';

export default function Members(props) {

    const columnHelper = createColumnHelper();


    const handleStateChange = (rowId, newState) => {
        const updatedData = data.map((d, i) => {
            if (`${i}` === rowId) {
                return {
                    ...d,
                    states: newState,
                };
            }
            return d;
        });

        setData(updatedData);
    };

    const columns = [
        columnHelper.accessor("", {
            id: "RegNo",
            cell: (info) => <span>{info.row.index + 1}</span>,
            header: "Reg No",
        }),
        columnHelper.accessor("image", {
            cell: (info) => (
                <img
                    src={info?.getValue()}
                    alt="..."
                    className="rounded-full w-10 h-10 object-cover"
                />
            ),
            header: "Image",
        }),
        columnHelper.accessor("name", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Name",
        }),
        columnHelper.accessor("age", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Age",
        }),

        columnHelper.accessor("", {
            cell: (info) => <button type="submit" className="text-center text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[35px]">Update</button>,
            header: "Edite",
        }),
        columnHelper.accessor("", {
            id: "states",
            cell: (info) => {
                const states = info.row.values.states;
                <div className="flex items-center justify-center">
                     <input
                        checked={states === "Active"}
                        onChange={() => handleStateChange("Active")}
                        className="mr-1"
                    />
                    <label htmlFor={`active-${info.row.id}`} className="mr-3 text-green-500">Active</label>
                     <input
                        // type="radio"
                        // id={`deactivate-${info.row.id}`}
                        // name={`state-${info.row.id}`}
                        checked={states === "Deactivate"}
                        onChange={() => handleStateChange("Deactivate")}
                        className="mr-1"
                    />
                    <label htmlFor={`deactivate-${info.row.id}`} className="text-red-500">Deactivate</label>
                </div>
            },
            header: "States",
        }),
    ];
    const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });



    return (


        // <div className='bg-gradient-to-r from-red-500 via-black to-yellow-500 h-90vh'>
        //     <div className="w-full flex flex-col items-center  justify-center overflow-y-scroll h-90vh">
        //         <div className="mt-[180px] w-10/12 md:w-9/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  ">
        //             <AdminPlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
        //             <AdminPlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
        //             <AdminPlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
        //             <AdminPlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
        //             <AdminPlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />
        //             <AdminPlayerCard title="Captain" imgURL="www.sample.com/dps/dp.jpg" name="Chamika" />

        //         </div>
        //     </div>
        // </div>

        <div className="p-[4px] max-w-5xl mx-auto  fill-gray-400 rounded">

            <table className="border  w-full text-left rounded">
                <thead className="bg-yellow-500 rounded-md">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="capitalize px-3.5 py-2">
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className='text-white'>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row, i) => (
                            <tr
                                key={row.id}
                                className={`
                ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                `}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-3.5 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr className="text-center h-32">
                            <td colSpan={12}>No Recoard Found!</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* pagination */}
            <div className="flex items-center justify-end mt-2 gap-2 bg-black rounded text-white ">
                <button
                    onClick={() => {
                        table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                    className="p-1 border border-white rounded px-2 bg-black"
                >
                    {"<"}
                </button>
                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className="p-1 border border-white rounded px-2 bg-black"
                >
                    {">"}
                </button>

                <span className="flex items-center gap-1 bg-black">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </strong>
                </span>
                <span className="flex items-center gap-1 bg-black">
                    | Go to page:
                    <input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            table.setPageIndex(page);
                        }}
                        className="border p-1 rounded w-16 bg-black"
                    />
                </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                    className="p-2 bg-black rounded"
                >
                    {[10, 20,30].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    )
}
