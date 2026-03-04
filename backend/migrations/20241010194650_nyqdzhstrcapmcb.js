'use strict';

/**
 * Migration: 20241010194650_nyqdzhstrcapmcb
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('roubztnrvp', function(table) {
    table.integer('paiaqtzkuy');
    table.timestamp('ozqkqdjqco');
    table.json('jlgtvpxaar');
    table.timestamp('mjmoqnbdcc');
    table.timestamp('yvqdszrvnl');
    table.timestamp('uuntcgaclv');
    table.float('waosmdoamj');
    table.bigInteger('orhwjqdlgj');
    table.integer('anhgyseprr');
    table.timestamp('tygxuxujaf');
  });
  await knex.schema.alterTable('eptglcsxtn', function(table) {
    table.float('tkzgxqxaft');
    table.string('wtuybnyokv');
    table.string('aubhbolcsn');
    table.text('mdjelzffcc');
    table.json('oagoyddoqo');
    table.boolean('wwkvfttuxy');
    table.boolean('liqzoerqww');
  });
  await knex.schema.alterTable('faapilfxkx', function(table) {
    table.timestamp('awtmdqtwvz');
    table.integer('oqmwkwpilu');
    table.json('wmvassfjht');
    table.text('maasidgtde');
    table.boolean('ilcxuwbrwc');
    table.integer('jjrcujbocv');
    table.integer('ujsvnuqelr');
  });
  await knex.schema.alterTable('pativvwmqv', function(table) {
    table.bigInteger('nqohyyhxen');
    table.float('odldnvhvuh');
    table.boolean('lxqducrhzz');
    table.timestamp('xuruofsyia');
    table.json('gcgecvcygz');
    table.float('cukugizpsa');
  });
  await knex.schema.alterTable('zkqudglmwl', function(table) {
    table.text('jporzpznba');
    table.text('davmimlzxk');
    table.bigInteger('lheokswgxb');
    table.float('cmtlxexwkb');
    table.integer('xzdfrjkled');
    table.timestamp('ocyxhccigi');
    table.timestamp('swkcjkfffg');
    table.bigInteger('ciprrulmrb');
    table.boolean('abzhaieina');
  });
  await knex.schema.alterTable('qsnivibkbc', function(table) {
    table.integer('twcgfwlwzt');
    table.json('iumlguprwn');
    table.integer('hiclxxglml');
    table.string('gwzivebali');
    table.text('wgtdnaloyq');
    table.float('pyvshuwimk');
  });
  await knex.schema.alterTable('utimomfawp', function(table) {
    table.bigInteger('ozeizhynjy');
    table.integer('nbpougqkuw');
    table.string('cetofjueid');
    table.string('wviayipsko');
    table.bigInteger('wofeyuyrff');
    table.json('mtnuppaalv');
    table.float('rhijrqvpiz');
    table.timestamp('eguvjcsinh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};