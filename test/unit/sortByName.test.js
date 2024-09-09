const sorting = require("../../app");

describe("Books names test suit", () => {
    it("Books names should be sorted in ascending order", () => {
        const input = [
            "Гарри Поттер",
            "Властелин Колец",
            "Волшебник изумрудного города",
        ];

        const expected = [
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ];

        const output = sorting.sortByName(input)

        expect(output).toEqual(expected);
    });

    it("There are similar books on the list", () => {
        const input = [
            "Гарри Поттер",
            "Властелин Колец",
            "Властелин Колец",
        ];
        const expected = [
            "Властелин Колец",
            "Властелин Колец",
            "Гарри Поттер",
        ];
        const output = sorting.sortByName(input)

        expect(output).toEqual(expected);
    });

    it("Empty List", () => {
        const input = [];
        const expected = [];
        const output = sorting.sortByName(input)

        expect(output).toEqual(expected);
    });
});