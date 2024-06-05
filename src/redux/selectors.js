const selectContacts = state => state.contacts.items;
const selectFilterValue = state => state.filtered;
const selectLoading = state => state.contacts.isLoading;
const selectErr = state => state.contacts.error;

export { selectContacts, selectFilterValue, selectLoading, selectErr };
