export const sortedCatagIds = [1, 6, 8, 2, 5, 4, 3, 7];

export function sort(nodes) {
  return nodes.reduce((obj, item) => {
    const { section_id, section_name } = item;
    if (!obj[section_id]) obj[section_id] = {};
    obj[section_id]['name'] = item.section_name;
    if (!obj[section_id]['items']) obj[section_id]['items'] = [];
    obj[section_id]['items'].push(item);
    return obj;
  }, {});
}
