import { GameMode } from 'src/game/game/game.types';

export type GetLobbiesResponse = Array<{
        id: string;
        mode: GameMode;
        playersCount: number;
        createdAt: Date;
}>;
