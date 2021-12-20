<template>
    <div class="profile">
        <h1 class="profile__title">
            Profile page
        </h1>
        <p class="profile__description">
            This is profile page
        </p>
        <p>{{ fullname }}</p>
        <p>{{ email }}</p>
        <button @click="changeNameHandler('Alex')">
            change name to Alex
        </button>
        <button @click="changeNameHandler('')">
            change name to emptyString
        </button>
        <button @click="changeEmailHandler('email@email.uk')">
            change email to email@email.uk
        </button>
        <button @click="changeEmailHandler('t.mail.testing')">
            change email to t.mail.testing
        </button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProfilePage',
    computed: {
        ...mapGetters({
            fullname: 'profileStore/fullName',
            email: 'profileStore/email',
        }),
    },
    methods: {
        ...mapActions({
            changeName: 'profileStore/changeName',
            changeEmail: 'profileStore/changeEmail',
        }),
        changeNameHandler(newName) {
            this.changeName(newName);
        },
        changeEmailHandler(newEmail) {
            this.changeEmail(newEmail);
        },
    },
};
</script>

<style lang="scss">
.profile {
    &__title {
        margin: 0 0 calc(2 * var(--vertical-rhythm)) 0;

        text-align: center;
    }
}
</style>
