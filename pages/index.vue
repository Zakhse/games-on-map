<template>
    <div class="main-page">
        <modal name="map-info-modal"
               class="map-info-modal-root"
               height="auto"
               width="60%"
               scrollable>
            <template v-if="mapInModal">
                <div class="header">
                    Игра — <b>{{ mapInModal.game }}</b>
                </div>
                <div class="images-header">
                    Локация в игре
                    <template v-if="mapInModal.gameName"> — <b>{{ mapInModal.gameName }}</b></template>
                </div>
                <div class="location-images">
                    <img v-if="mapInModal.game1"
                         :src="mapInModal.game1"
                         :class="{only: !mapInModal.game2}"
                         class="location-image">
                    <img v-if="mapInModal.game2"
                         :src="mapInModal.game2"
                         class="location-image">
                </div>
                <div class="images-header">
                    Реальная локация — <b>{{ mapInModal.name }}</b>
                </div>
                <div class="location-images">
                    <img v-if="mapInModal.real1"
                         :src="mapInModal.real1"
                         :class="{only: !mapInModal.real2}"
                         class="location-image">
                    <img v-if="mapInModal.real2"
                         :src="mapInModal.real2"
                         class="location-image">
                </div>
                <div class="description">
                    {{ mapInModal.description }}
                </div>
            </template>
        </modal>
        <gmap-map ref="mapRef"
                  :center="{lat:0, lng:0}"
                  :zoom="2"
                  :options="mapOptions"
                  class="google-map"
                  map-type-id="terrain">
            <gmap-marker v-for="map in gameMaps"
                         :key="map.name"
                         :position="{lat:map.lat, lng:map.lng}"
                         :clickable="true"
                         :draggable="false"
                         @click="clickMarker(map)"
                         @mouseover="openPopover(map)"
                         @mouseout="closePopover()">
                <gmap-info-window :opened="map.name === mapNameOfShownPopover"
                                  @closeclick="closePopover()">
                    {{ map.name }}
                </gmap-info-window>
            </gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
import gameMaps from '@/assets/js/static_data';

export default {
    name: 'Index',
    data() {
        return {
            mapInstance: null,
            gameMaps,
            mapNameOfShownPopover: '',
            mapInModal: null,
            mapOptions: {
                minZoom: 2,
            },
        };
    },
    computed: {},
    methods: {
        clickMarker(gameMap) {
            this.mapInModal = gameMap;
            this.$modal.show('map-info-modal');
        },
        openPopover(gameMap) {
            this.mapNameOfShownPopover = gameMap.name;
        },
        closePopover() {
            this.mapNameOfShownPopover = '';
        },
    },
    mounted() {
        this.$refs.mapRef.$mapPromise.then((map) => {
            this.mapInstance = map;
        });
    },
};
</script>
<style lang="scss">
    .main-page {
        .map-info-modal-root {
            .v--modal {
                background-color: rgba(50, 50, 50, 0.7);
                border-radius: 20px;
                font-size: 25px;
                color: white;
                margin-top: 25px;
                padding: 0 3ch 1em 3ch;
                .header, .images-header {
                    text-align: center;
                    margin-top: 0.6em;
                    margin-bottom: 0.6em;
                }
                .location-images {
                    display: flex;
                    justify-content: center;
                    height: 300px;
                    .location-image {
                        height: 100%;
                        width: auto;
                        &:not(:last-child) {
                            margin-right: 10px;
                        }
                        &:not(.only) {
                            width: 1px;
                            flex-basis: 50%;
                            object-fit: cover;
                        }
                    }
                }
                .description {
                    margin-top: 1em;
                    font-size: 20px;
                    font-weight: 100;
                    line-height: 1.5;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .main-page {
        height: 1px;
        min-height: 100vh;
        .google-map {
            height: 100%;
        }
    }
</style>
