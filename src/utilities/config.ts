export class Config {
    public static configure() {
        /* function to restrict the input of an input control by implementing a keypress event
        - data-regex contains the regex to use to validate a key */
        $("body").on("keypress", "input[data-regex]", event => {
            const $this = $(event.currentTarget as any);
            const regex = new RegExp($this.data("regex"));
            const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (event.which !== 13 && !regex.test(key)) {
                event.preventDefault();
                return false;
            };

            return true;
        });

        /* function to restrict the input of an input control by implementing a paste event
        - data-regex contains the regex to use to validate a key */
        $("body").on("paste", "input[data-regex]", () => {
            const $this = $(event.currentTarget as any);
            setTimeout(() => {
                const value = $this.val() as string;
                let result = "";
                const regex = new RegExp($this.data("regex"));
                for (let i = 0; i < value.length; i++) {
                    const c = value.charAt(i);
                    if (regex.test(c)) {
                        result += c;
                    }
                };
                $this.val(result);
            }, 10);
        });

        $(window as any).bind("resize", () => {
            $("[data-toggle=popover]").popover("update");
        });

        $("html").on("click", e => {
            $("[data-toggle=popover][data-transient=true]").each((index, element) => {
                const target = e.target as any;
                const current = $(element as any);
                if (!current.is(target) && current.has(target).length === 0) {
                    // $(".popover").has(target).length === 0
                    const data = $(element).data("bs.popover");
                    const isVisible = !!data && !!data.tip && $(data.tip).hasClass("show");
                    if (isVisible) {
                        setTimeout(() => current.popover("hide"), 250);
                    }
                }
            });
        });
    }
}