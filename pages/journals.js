import Filter from '@/components/Filter';
import Table from '@/components/Table';
import React from 'react';

export default function Page() {
  return (
    <div className="w-ful  flex flex-wrap p-10">
      <Filter title="Choose Subjects" />
      <Filter title="Choose Sub Subjects" />
      <Filter title="HJRS Category" />
      <Filter title="SCOPUS" />
      <Filter title="WOS" />
      <Filter title="Open Access" />
      <Filter title="Impact Factors" />
      <h1 className="w-full p-3 shadow-lg bg-zinc-800 rounded my-3 text-white">
        Premium Filters
      </h1>
      <div className="w-full flex">
        <Filter title="Choose Publisher" />
        <Filter title="Fee APC" />
        <Filter title="Submission to Acceptance Time" />
        <Filter title="Submission to Publication Time" />
      </div>
      <div className="mt-5 w-full">
        <Table />
      </div>
      <div>
        <button>Load More</button>
      </div>
    </div>
  );
}
