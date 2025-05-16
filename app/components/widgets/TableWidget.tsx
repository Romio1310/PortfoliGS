import React from 'react';

// Simple table widget component for Sanity preview
export function TableWidget(props: any) {
  const { table, caption } = props.value || {};
  
  if (!table || !table.rows) {
    return <div>No table data</div>;
  }
  
  return (
    <div className="sanity-table-preview">
      <div className="text-sm font-medium">Table Preview</div>
      {caption && <div className="text-xs italic mb-2">{caption}</div>}
      <div className="text-xs">
        {table.rows.length} rows × {table.rows[0]?.cells?.length || 0} columns
      </div>
    </div>
  );
}
