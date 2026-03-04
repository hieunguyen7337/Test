'use strict';

/**
 * Migration: 20241013112533_ljgttzaqmptyfbu
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mirlzkddqu', function(table) {
    table.string('wwzcqgpccn');
    table.bigInteger('hjumdqysmz');
    table.integer('haptgypnvz');
  });
  await knex.schema.alterTable('ckhhfhabmf', function(table) {
    table.string('rwesuhnzdj');
    table.timestamp('azhdubeuox');
    table.boolean('zhdvjvsfrz');
    table.json('bcnzkijjls');
    table.boolean('wloyycmcls');
    table.timestamp('lmrtjtyuzq');
    table.float('aisqivnzfw');
    table.float('knrnbjzdaa');
    table.text('bdgwvzxxkn');
    table.string('jicalhesar');
  });
  await knex.schema.alterTable('xaxcdjbyiv', function(table) {
    table.timestamp('wfmkibpylm');
    table.string('fvmgkvvgqg');
    table.float('acsninraub');
  });
  await knex.schema.alterTable('siijgwjjet', function(table) {
    table.text('lddndwrtwc');
    table.boolean('umsmsqzupc');
    table.text('rvvfumegws');
    table.json('wmjelvmgwe');
    table.text('zmijknnxyd');
    table.bigInteger('cftwuzvpqo');
    table.json('lckicgoxrb');
    table.integer('wqzyvcnotg');
  });
  await knex.schema.alterTable('dyqwceptlq', function(table) {
    table.text('wabgfcgeck');
    table.timestamp('gjacepdtii');
    table.text('qikktbteft');
    table.string('aqeacfxmzj');
    table.bigInteger('ftkupvxobt');
    table.json('lmqtyddbtv');
    table.float('vulokepvsd');
    table.float('zwdzthlmso');
  });
  await knex.schema.alterTable('ijdalxhzji', function(table) {
    table.text('olxesbvqcz');
    table.text('rtwuznglvj');
    table.boolean('cdytsjsecs');
  });
  await knex.schema.alterTable('imlhrpjede', function(table) {
    table.integer('dcoodwzhqm');
    table.float('wpqctyydmu');
    table.boolean('jnsctnznbf');
    table.boolean('ohxwucztoc');
    table.integer('ahmdzmybwt');
    table.string('jxvssadvbs');
    table.text('ndorvrsxeb');
    table.string('obhvcojnmo');
  });
  await knex.schema.alterTable('oocfwtkqav', function(table) {
    table.bigInteger('payzibufjc');
    table.string('iwcklypzec');
    table.float('wfwgnybuwx');
    table.integer('vcwiehpdll');
    table.bigInteger('wntjnkalkn');
    table.boolean('uizxqtqmuw');
  });
  await knex.schema.alterTable('kamcdgxkkv', function(table) {
    table.json('vdgxbhiogm');
    table.bigInteger('eyyvwsmklw');
    table.timestamp('sabebkmdrf');
    table.string('mbqlwjppch');
    table.float('iiqqsofyxk');
    table.json('zrfofdxxbo');
    table.text('qfesvghupz');
    table.float('gckgxkuubr');
    table.float('vuymyajkej');
  });
  await knex.schema.alterTable('lwgspsqnce', function(table) {
    table.float('cqondzfzdg');
    table.integer('irokwqqurj');
    table.bigInteger('izkrmjjymd');
    table.json('wxkouhpfgx');
    table.string('gsppayqdyw');
  });
  await knex.schema.alterTable('howwkmibto', function(table) {
    table.integer('tizihjkojq');
    table.json('mmfdnzzcae');
    table.integer('syauwcydpi');
    table.text('vxbzwsyeha');
    table.timestamp('tokzftjyzj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};