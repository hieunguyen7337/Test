'use strict';

/**
 * Migration: 20240405155112_gvxxgqjcsbxabwi
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('itmpeybrts', function(table) {
    table.boolean('kribnlbllw');
    table.string('ouckdezqmt');
    table.timestamp('ximcfwaiyg');
    table.text('abznsvjrzj');
    table.float('hiagwjehpv');
    table.bigInteger('zdmelbslts');
    table.text('iemmezmgjk');
    table.float('ynvrrhewsd');
    table.boolean('ljsfcqjlge');
    table.bigInteger('jkmpzalzfq');
  });
  await knex.schema.alterTable('avysvymccm', function(table) {
    table.text('tzqawicavl');
    table.integer('mxqnhmwrtz');
    table.json('gutmptfqna');
    table.boolean('owbongkgug');
    table.boolean('jnqkhbzgal');
    table.timestamp('ozmblwmdbt');
    table.bigInteger('perjjhweeo');
    table.text('htxuelxcvi');
    table.bigInteger('injhdyrcvv');
    table.boolean('aicqiclsld');
  });
  await knex.schema.alterTable('yzckixraxl', function(table) {
    table.text('sxcwfixhlq');
    table.string('avukikmgjh');
    table.float('pbdezozyaf');
    table.timestamp('kazkxzxopf');
    table.boolean('brsynstypw');
    table.json('srvqolbkqd');
    table.timestamp('khetjhwctf');
    table.boolean('rwmrdceckf');
    table.boolean('jbnpvuoldr');
  });
  await knex.schema.alterTable('fqgvfostvr', function(table) {
    table.string('zwpgmsasvf');
    table.bigInteger('wxiwtltfxq');
    table.json('jsdesaujue');
    table.timestamp('spountelxy');
    table.text('wigkdthiut');
    table.timestamp('hnemlfueex');
    table.timestamp('jnyuxukgbp');
    table.float('dxyylfjoaq');
    table.integer('edgrrawrpu');
    table.boolean('yrtpzhaneo');
  });
  await knex.schema.alterTable('wektipflif', function(table) {
    table.json('gocivslrey');
    table.text('cfnfibkjnc');
    table.bigInteger('gyvcioxfib');
    table.boolean('ifwzcegaow');
    table.float('orltruysdd');
    table.integer('lunlusrueh');
    table.string('lwlypgkuwa');
    table.json('hcezrbgarl');
    table.boolean('nvbyvgoowf');
  });
  await knex.schema.alterTable('epmmilsefq', function(table) {
    table.string('mwmnegdlrw');
    table.text('tehdbivnwl');
    table.integer('ocuaweleey');
    table.boolean('rtczvojkyu');
    table.text('kvpniixzjd');
    table.text('lawsguxykn');
    table.text('qzaxewyjne');
    table.boolean('nxdvjtvati');
  });
  await knex.schema.alterTable('bhdajcjtjd', function(table) {
    table.text('yjqtizyoey');
    table.bigInteger('zltgrghcrs');
    table.bigInteger('jxndvuqhaw');
    table.float('cblhspdths');
    table.integer('lqnidviuvb');
    table.integer('xhwzbuikec');
    table.bigInteger('nmlopwdiji');
    table.float('rrjzvyusvy');
    table.text('hmghmskmqo');
    table.boolean('nncbmwxelt');
  });
  await knex.schema.alterTable('cxxrmybyyu', function(table) {
    table.boolean('hgvnarugmc');
    table.bigInteger('fafuogorbf');
    table.text('oaihukgocr');
    table.timestamp('dxkcfneywe');
    table.text('lzuzvpdzku');
    table.bigInteger('obrczuxgiw');
    table.json('vcqmwwcbfc');
  });
  await knex.schema.alterTable('yzouoahcxg', function(table) {
    table.json('bgiakarspo');
    table.integer('zmgchbfrpz');
    table.string('eckirslnhv');
    table.boolean('glfuhonahf');
    table.boolean('ozdnsrfgis');
    table.boolean('wfmkskluut');
    table.boolean('dwalznryua');
    table.bigInteger('oiglcjwwjl');
  });
  await knex.schema.alterTable('clxbczcgem', function(table) {
    table.json('unwausxdld');
    table.json('pixfodbuhp');
    table.integer('iwmfzjpjhf');
    table.text('nfctkjvdtj');
    table.json('cbjnzqwbbl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};