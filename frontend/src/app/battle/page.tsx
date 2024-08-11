import { EnemyHitPoint } from '@/components/battle/atom/EnemyHitPoint';
import { BattleMenu } from '@/components/battle/block/BattleMenu';
import { EnemyArea } from '@/components/battle/block/EnemyArea';
import React from 'react';

const page = () => {
	return (
		<div
			style={{
				height: '100vh',
			}}
		>
			<EnemyHitPoint />
			<EnemyArea />
			<BattleMenu />
		</div>
	);
};

export default page;
