'use strict';

/**
 * Migration: 20241104034621_fgmmzsehvdeufti
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kktekzdqpf', function(table) {
    table.float('uwyrfkchvr');
    table.timestamp('wewkakutfm');
    table.timestamp('ygbprgbeya');
    table.text('qieiantpnh');
    table.integer('mpxertsmwt');
    table.text('djglpyvuwm');
    table.integer('nguneplhzm');
  });
  await knex.schema.alterTable('ozigvaywab', function(table) {
    table.json('pvvmdcxveb');
    table.integer('seyzmvcapw');
    table.boolean('btvtwcqnzx');
    table.integer('arupheupfb');
    table.json('bxlztlbxvk');
    table.text('fpewaqwltu');
    table.text('bticngqkby');
    table.json('denxzpgqrk');
  });
  await knex.schema.alterTable('tsvdjowoji', function(table) {
    table.float('mytzshcjjw');
    table.boolean('qnolhvnyuw');
    table.integer('uubdmzgfkd');
    table.string('nwtsrstrcq');
    table.integer('nyvtkbemsl');
    table.text('hmmuojktdr');
    table.float('kfayterlaq');
    table.text('eoounzgcez');
    table.float('rdysehhsot');
    table.json('cflolhixwk');
  });
  await knex.schema.alterTable('dzbnaeedeo', function(table) {
    table.boolean('pkrtgnwzur');
    table.float('nrktbvcwhx');
    table.text('rfdjhpcgwv');
    table.text('pylrusaszv');
  });
  await knex.schema.alterTable('sjtstryxdk', function(table) {
    table.float('ifzukombvk');
    table.string('jsmsnqprfv');
    table.float('elefjujlyr');
  });
  await knex.schema.alterTable('youuxyxrbg', function(table) {
    table.text('vyvntwtcew');
    table.integer('ucmmzmttza');
    table.bigInteger('briyqnvhzj');
    table.float('dnzzlrmtrt');
    table.float('vvfhzhkqlb');
    table.text('mgyswtfpqp');
    table.string('davynvwbmn');
    table.text('toasssralz');
    table.float('mvtsnezqaj');
  });
  await knex.schema.alterTable('ixucrkbvql', function(table) {
    table.json('veswlhahev');
    table.string('qgrucffxma');
    table.bigInteger('lkzrhgkomz');
    table.text('ytisebziqy');
    table.bigInteger('fqgsapegtj');
    table.timestamp('forsngztuc');
  });
  await knex.schema.alterTable('uhqpebzdzq', function(table) {
    table.bigInteger('njdqquefpu');
    table.bigInteger('uqbizjqlzd');
    table.text('zwehbwnyoe');
    table.boolean('fgiitxbqma');
    table.json('evdqzjsild');
    table.text('rubbfnueir');
    table.bigInteger('alhyrkbixt');
  });
  await knex.schema.alterTable('ypjwcuxfzw', function(table) {
    table.text('paihllfsmd');
    table.float('jpowvrkckb');
    table.json('nxzbbwxmda');
    table.bigInteger('ewlvuvkhtj');
    table.string('srapfjrdxt');
    table.timestamp('sqxjngbmml');
  });
  await knex.schema.alterTable('hqtzsuntlv', function(table) {
    table.text('dmttuzpxoc');
    table.string('spmqtimhro');
    table.text('pkhxswccvu');
  });
  await knex.schema.alterTable('btxmvcfhaz', function(table) {
    table.json('lvwzqmkxky');
    table.boolean('nlgchiwkyv');
    table.json('yogbfcabtk');
    table.text('dyqdqjhsnr');
    table.timestamp('dfgjfuvaee');
    table.text('xqeaicziwy');
  });
  await knex.schema.alterTable('ikytncxywe', function(table) {
    table.integer('pdetqabnlm');
    table.json('nhvvjbkmpz');
    table.json('ycjucutlmc');
    table.bigInteger('svzepxngrn');
    table.timestamp('ymopkhbhly');
    table.float('yladeqqlem');
    table.text('cihrmnbwcf');
    table.text('ogxyrgjlfn');
    table.boolean('ojnnfrxyme');
  });
  await knex.schema.alterTable('jejskelvek', function(table) {
    table.text('iwkbwruvwv');
    table.string('jtuealoyle');
    table.boolean('wiphypaifc');
    table.bigInteger('yclmdigkxu');
    table.integer('amcqrtbjex');
    table.timestamp('ujyfhnrleb');
    table.text('ddbeokujzk');
  });
  await knex.schema.alterTable('haazduywcq', function(table) {
    table.integer('gbrydnbtqq');
    table.boolean('iuvxqhbshk');
    table.string('cilckxqahc');
    table.boolean('mwbkvfvnom');
    table.boolean('cxmhbmcerc');
    table.json('lqkvpfwkwm');
    table.integer('djipmklign');
    table.boolean('hoeurxiaps');
    table.string('hylpzenalh');
  });
  await knex.schema.alterTable('jztgdgovtl', function(table) {
    table.boolean('auzjttmkeq');
    table.string('xanbecidbk');
    table.text('plhmnwrpho');
    table.float('bofebnziyg');
    table.float('iekbmjkvjf');
    table.string('emjrpqqjbf');
    table.boolean('xaktekqihj');
    table.timestamp('bmnwjnhmcw');
    table.float('iyffgrgsyg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};