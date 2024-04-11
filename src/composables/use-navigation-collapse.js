import { ref } from 'vue';

const isCollapse = ref(false);
const isSegmentCollapsed = ref(false);

export function useNavigationCollapse() {

    if (!window.localStorage.getItem('recomm')) {
        window.localStorage.setItem('recomm', JSON.stringify({
            isCollapse: false,
            isSegmentCollapsed: false
        }));
    } else {
        const item = JSON.parse(window.localStorage.getItem('recomm'));
        isCollapse.value = item.isCollapse;
        isSegmentCollapsed.value = item.isSegmentCollapsed;
    }

    function updateLocalStorage() {
        window.localStorage.setItem('recomm', JSON.stringify({
            isCollapse: isCollapse.value,
            isSegmentCollapsed: isSegmentCollapsed.value,
        }));
    }

    function collapseNav() {
        isCollapse.value = !isCollapse.value;
        updateLocalStorage();
    }

    function collapseSegmentNav() {
        isSegmentCollapsed.value = !isSegmentCollapsed.value;
        updateLocalStorage();
    }
    return {
        isCollapse,
        isSegmentCollapsed,
        collapseNav,
        collapseSegmentNav,
    }
}