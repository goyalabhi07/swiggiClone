export function filterData(searchText, restroList) {
    return restroList.filter((ele) =>
        ele.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
}
