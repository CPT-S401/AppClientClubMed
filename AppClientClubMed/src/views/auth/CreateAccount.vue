<template>
    <div class="flex flex-col sm:flex-row justify-center items-center h-screen bg-gray-200">
        <div class="bg-white p-4 rounded-lg flex flex-col items-center sm:items-start sm:ml-4">
            <h2 class="text-lg font-bold mb-4 text-primary-blue">Créer un compte</h2>
            <form>
                <div class="flex flex-col mb-4">
                    <label for="nom" class="mb-1 text-primary-blue">Nom</label>
                    <input type="text" id="nom" name="nom" placeholder="Indiquez votre nom" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                </div>
                <div class="flex flex-col mb-4">
                    <label for="prenom" class="mb-1 text-primary-blue">Prénom</label>
                    <input type="text" id="prenom" name="prenom" placeholder="Indiquez votre prénom" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                </div>
                <div class="flex flex-col mb-4 sm:flex-row">
                    <div class="flex flex-col mb-4 sm:mr-4">
                        <label for="genre" class="mb-1 text-primary-blue">Genre</label>
                        <select id="genre" name="genre" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                            <option value="N/A">Indiquez votre civilité</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="pays" class="mb-1 text-primary-blue">Pays</label>
                        <select id="pays" name="pays" placeholder="Indiquez votre pays" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                            <option value="N/A">Indiquez votre pays de résidence</option>
                            <option value="france">France</option>
                            <option value="luxembourg">Luxembourg</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col mb-4">
                    <label for="email" class="mb-1 text-primary-blue">Email</label>
                    <input type="email" id="email" name="email" placeholder="Indiquez votre email" class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                </div>
                <div class="flex flex-col mb-4">
                    <label for="motdepasse" class="mb-1 text-primary-blue">Mot de passe</label>
                    <input type="password" id="motdepasse" name="motdepasse" placeholder="Indiquez votre mot de passe"
                        class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                </div>
                <div class="flex flex-col mb-4">
                    <label for="confirmation" class="mb-1 text-primary-blue">Confirmation mot de passe</label>
                    <input type="password" id="confirmation" name="confirmation" placeholder="Confirmer votre mot de passe"
                        class="rounded-lg bg-white border-primary-blue border-2 px-2 py-1">
                </div>
                <button type="submit" class="bg-white border-2 border-primary-blue text-primary-blue px-4 py-2 rounded-lg hover:bg-primary-blue hover:text-white">Créer un
                    compte</button>
            </form>
        </div>
    </div>
</template>